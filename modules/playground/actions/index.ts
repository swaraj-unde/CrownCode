"use server";

import { db } from "@/lib/db";

export const getPlaygroundById = async (id: string) => {
  try {
    const playground = await db.playground.findUnique({
      where: {
        id,
      },
      select: {
        templateFiles: {
          select: {
            content: true,
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
