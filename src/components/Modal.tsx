import * as Dialog from "@radix-ui/react-dialog";
import React from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
    isOpen: boolean;
    onChange: (open: boolean) => void;
    title?: string;
    description?: string;
    children: React.ReactNode;
    type?: string;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onChange,
    title,
    description,
    type,
    children,
}) => {
    return (
        <Dialog.Root open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="z-50 bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
                <Dialog.Content
                    className={`z-50 fixed drop-shadow-md border border-neutral-700 top-[50%] left-[50%] max-h-full h-full w-full md:max-w-[400px] translate-x-[-50%] translate-y-[-50%] rounded-md ${
                        type === "Menu" ? "bg-pink-200" : "bg-slate-100"
                    }  p-[25px] focus:outline-none md:top-0 md:left-auto md:right-0 md:translate-x-0 md:translate-y-0 md:h-full md:max-h-full
                `}
                >
                    <Dialog.Title className="text-xl text-center uppercase font-bold mb-4">
                        {title}
                    </Dialog.Title>
                    <Dialog.Description className="mb-5 text-lg leading-normal">
                        {description}
                    </Dialog.Description>
                    <div>{children}</div>
                    <Dialog.Close asChild>
                        <button className="text-neutral-400 hover:text-zinc-900 absolute top-[10px] right-[10px] h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:outline-none">
                            <IoMdClose />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default Modal;
