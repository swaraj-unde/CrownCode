import * as fs from "fs";
import * as path from "path";

export interface TemplateFile {
  filename: string;
  fileExtension: string;
  content: string;
}

export interface TemplateFolder {
  folderName: string;
  items: (TemplateFile | TemplateFolder)[];
}

export type TemplateItem = TemplateFile | TemplateFolder;

interface ScanOptions {
  ignoreFiles?: string[];

  ignoreFolders?: string[];

  ignorePatterns?: RegExp[];

  maxFileSize?: number;
}

export async function scanTemplateDirectory(
  templatePath: string,
  options: ScanOptions = {},
): Promise<TemplateFolder> {
  const defaultOptions: ScanOptions = {
    ignoreFiles: [
      "package-lock.json",
      "yarn.lock",
      ".DS_Store",
      "thumbs.db",
      ".gitignore",
      ".npmrc",
      ".yarnrc",
      ".env",
      ".env.local",
      ".env.development",
      ".env.production",
    ],
    ignoreFolders: [
      "node_modules",
      ".git",
      ".vscode",
      ".idea",
      "dist",
      "build",
      "coverage",
    ],
    ignorePatterns: [
      /^\..+\.swp$/,
      /^\.#/,
      /~$/,
    ],
    maxFileSize: 1024 * 1024,
  };

  const mergedOptions: ScanOptions = {
    ignoreFiles: [
      ...(defaultOptions.ignoreFiles || []),
      ...(options.ignoreFiles || []),
    ],
    ignoreFolders: [
      ...(defaultOptions.ignoreFolders || []),
      ...(options.ignoreFolders || []),
    ],
    ignorePatterns: [
      ...(defaultOptions.ignorePatterns || []),
      ...(options.ignorePatterns || []),
    ],
    maxFileSize:
      options.maxFileSize !== undefined
        ? options.maxFileSize
        : defaultOptions.maxFileSize,
  };

  if (!templatePath) {
    throw new Error("Template path is required");
  }

  try {
    const stats = await fs.promises.stat(templatePath);
    if (!stats.isDirectory()) {
      throw new Error(`'${templatePath}' is not a directory`);
    }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      throw new Error(`Template directory '${templatePath}' does not exist`);
    }
    throw error;
  }

  const folderName = path.basename(templatePath);

  return processDirectory(folderName, templatePath, mergedOptions);
}

async function processDirectory(
  folderName: string,
  folderPath: string,
  options: ScanOptions,
): Promise<TemplateFolder> {
  try {
    const entries = await fs.promises.readdir(folderPath, {
      withFileTypes: true,
    });
    const items: TemplateItem[] = [];

    for (const entry of entries) {
      const entryName = entry.name;
      const entryPath = path.join(folderPath, entryName);

      if (entry.isDirectory()) {
        if (options.ignoreFolders?.includes(entryName)) {
          console.log(`Skipping ignored folder: ${entryPath}`);
            continue;
        }

        const subFolder = await processDirectory(entryName, entryPath, options);
        items.push(subFolder);
      } else if (entry.isFile()) {
        if (options.ignoreFiles?.includes(entryName)) {
          console.log(`Skipping ignored file: ${entryPath}`);
          continue;
        }

        const shouldSkip = options.ignorePatterns?.some((pattern) =>
          pattern.test(entryName),
        );
        if (shouldSkip) {
          console.log(`Skipping file matching ignore pattern: ${entryPath}`);
          continue;
        }

        try {
          const stats = await fs.promises.stat(entryPath);
          const parsedPath = path.parse(entryName);
          let content: string;

          if (options.maxFileSize && stats.size > options.maxFileSize) {
            content = `[File content not included: size (${stats.size} bytes) exceeds maximum allowed size (${options.maxFileSize} bytes)]`;
          } else {
            content = await fs.promises.readFile(entryPath, "utf8");
          }

          items.push({
            filename: parsedPath.name,
            fileExtension: parsedPath.ext.replace(/^\./, ""),
            content,
          });
        } catch (error) {
          console.error(`Error reading file ${entryPath}:`, error);
          const parsedPath = path.parse(entryName);
          items.push({
            filename: parsedPath.name,
            fileExtension: parsedPath.ext.replace(/^\./, ""),
            content: `Error reading file: ${(error as Error).message}`,
          });
        }
      }
    }

    return {
      folderName,
      items,
    };
  } catch (error) {
    throw new Error(
      `Error processing directory '${folderPath}': ${(error as Error).message}`,
    );
  }
}

export async function saveTemplateStructureToJson(
  templatePath: string,
  outputPath: string,
  options?: ScanOptions,
): Promise<void> {
  try {
    const templateStructure = await scanTemplateDirectory(
      templatePath,
      options,
    );

    const outputDir = path.dirname(outputPath);
    await fs.promises.mkdir(outputDir, { recursive: true });

    const data = await fs.promises.writeFile(
      outputPath,
      JSON.stringify(templateStructure, null, 2),
      "utf8",
    );
    console.log(`Template structure saved to ${outputPath}`);
  } catch (error) {
    throw new Error(
      `Error saving template structure: ${(error as Error).message}`,
    );
  }
}

export async function readTemplateStructureFromJson(
  filePath: string,
): Promise<TemplateFolder> {
  try {
    const data = await fs.promises.readFile(filePath, "utf8");
    return JSON.parse(data) as TemplateFolder;
  } catch (error) {
    throw new Error(
      `Error reading template structure: ${(error as Error).message}`,
    );
  }
}