import { Speciality } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpeciality = async (payload: Speciality): Promise<Speciality> => {
  const speciality = await prisma.speciality.create({
    data: payload,
  });
  return speciality;
};
const getAllSpecialites = async (): Promise<Speciality[]> => {
  const speciality = await prisma.speciality.findMany();
  return speciality;
};
const updateSpeciality = async (
  id: string,
  payload: Speciality,
): Promise<Speciality> => {
  const speciality = await prisma.speciality.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return speciality;
};
const deleteSpeciality = async (id: string): Promise<Speciality> => {
  const speciality = await prisma.speciality.delete({
    where: {
      id: id,
    },
  });
  return speciality;
};

export const specialityService = {
  createSpeciality,
  getAllSpecialites,
  deleteSpeciality,
  updateSpeciality,
};
