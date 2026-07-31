import { Request, Response } from "express";
import { specialityService } from "./speciality.service";

const createSpeciality = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await specialityService.createSpeciality(payload);
    res.status(201).send({
      success: true,
      message: "speciality create successfully..",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch specialities",
      error: error.message,
    });
  }
};
const getAllSpecialites = async (req: Request, res: Response) => {
  try {
    const result = await specialityService.getAllSpecialites();
    res.status(200).send({
      success: true,
      message: "Retrieved speciality successfully..",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch specialities",
      error: error.message,
    });
  }
};
const updateSpeciality = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const result = await specialityService.updateSpeciality(
      id as string,
      payload,
    );
    res.status(201).send({
      success: true,
      message: "speciality update successfully..",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch specialities",
      error: error.message,
    });
  }
};
const deleteSpeciality = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await specialityService.deleteSpeciality(id as string);
    res.status(201).send({
      success: true,
      message: "speciality delete successfully..",
      data: result,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Failed to fetch specialities",
      error: error.message,
    });
  }
};

export const specialityController = {
  createSpeciality,
  getAllSpecialites,
  updateSpeciality,
  deleteSpeciality,
};
