"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/modules/auth/actions";
import { revalidatePath } from "next/cache";
import { dayPickerContext } from "react-day-picker";

export const getAllPlaygroundForUser = async () => {
  const user = await currentUser();
  try {
    const playground = await db.playground.findMany({
      where: {
        userId: user?.id,
      },
      include: {
        user: true,
        Starmark: {
          where: {
            userId: user?.id!,
          },
          select: {
            isMarked: true,
          },
        },
      },
    });
    return playground;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createPlayground = async (data: {
  title: string;
  template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
  description?: string;
}) => {
  const user = await currentUser();
  const { template, title, description } = data;

  try {
    const playground = await db.playground.create({
      data: {
        title: title,
        description: description,
        template: template,
        userId: user?.id!,
      },
    });

    revalidatePath("/dashboard");
    return playground;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteProjectById = async (id: string) => {
  try {
    await db.playground.delete({
      where: {
        id,
      },
    });

    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
    return null;
  }
};
export const editProjectById = async (
  id: string,
  data: { title: string; description: string },
) => {
  try {
    await db.playground.update({
      where: {
        id,
      },
      data: data,
    });
    revalidatePath("/dashboard");
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const duplicateProjectById = async (id: string) => {
  try {
    const originalPlay = await db.playground.findUnique({
      where: { id },
      //add template
    });
    if (!originalPlay) {
      throw new Error("Playground Not Found");
    }

    const duplicate = await db.playground.create({
      data: {
        title: `${originalPlay.title} (Copy)`,
        description: originalPlay.description,
        template: originalPlay.template,
        userId: originalPlay.userId,
      },
    });
    revalidatePath("/dashboard");
    return duplicate;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const toggleStarMarked = async (
  playgroundId: string,
  isChecked: boolean,
) => {
  const user = await currentUser();
  const userId = user?.id;

  try {
    if (!userId) {
      throw new Error("User Id Not Found");
    }

    if (isChecked) {
      await db.starMark.create({
        data: {
          userId,
          playgroundId,
          isMarked: isChecked,
        },
      });
    } else {
      await db.starMark.delete({
        where: {
          userId_playgroundId: {
            userId,
            playgroundId,
          },
        },
      });
    }

    revalidatePath("/dashboard");

    return { success: true, isMarked: isChecked };
  } catch (error) {
    console.log(error);
    return null;
  }
};
