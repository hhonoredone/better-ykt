import React from "react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Title } from "./title";
import { FormInput } from "./forms/form-input";
import { Button } from "../ui/button";

interface Props {
  className?: string;
  onClose: () => void;
  open: boolean;
}

export const AuthModal: React.FC<Props> = ({ className, onClose, open }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog onOpenChange={handleClose} open={open}>
      <DialogContent className="w-[450px] bg-white p-10">
        <DialogTitle />

        <form className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div className="mr-2">
              <Title text="Вход в аккаунт" size="md" className="font-bold" />
              <p className="text-gray-400">Введите свою почту, чтобы войти в свой аккаунт</p>
            </div>
          </div>

          <FormInput name="email" label="E-Mail" required />
          <FormInput name="password" label="Пароль" type="password" required />

          <Button className="h-12 text-base justify-center" type="submit">
            Войти
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
