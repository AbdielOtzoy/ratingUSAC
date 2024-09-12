"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const EditProfileDialog = ({ user }) => {
  const handleSubmit = async (e) => {
    await connectToDatabase();

    e.preventDefault();

    const updatedUser = {
      nombres: e.target.nombres.value,
      apellidos: e.target.apellidos.value,
      correo: e.target.correo.value,
      password: e.target.password.value,
    };

    console.log(updatedUser);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Image
          src="/icons/edit.svg"
          alt="edit"
          width={50}
          height={50}
          className="cursor-pointer hover:opacity-70"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar Perfil</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <Label>
              <Input
                name="nombres"
                type="text"
                defaultValue={user.nombres}
                placeholder="Nombres Completos"
                className="p-2 text-xl font-medium border rounded-lg shadow-lg"
              />
            </Label>
            <Label>
              <Input
                name="apellidos"
                type="text"
                defaultValue={user.apellidos}
                placeholder="Apellidos Completos"
                className="p-2 text-xl font-medium border rounded-lg shadow-lg"
              />
            </Label>
            <Label>
              <Input
                name="correo"
                type="email"
                defaultValue={user.correo}
                placeholder="Correo Electrónico"
                className="p-2 text-xl font-medium border rounded-lg shadow-lg"
              />
            </Label>
            <Label>
              <Input
                name="password"
                type="password"
                defaultValue={user.password}
                placeholder="Contraseña"
                className="p-2 text-xl font-medium border rounded-lg shadow-lg"
              />
            </Label>
            <DialogFooter>
              <Button type="submit">Actualizar</Button>
            </DialogFooter>
          </form>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
