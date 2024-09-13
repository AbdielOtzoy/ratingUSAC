'use client'
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { findUserByRegistroAcademico } from '@/lib/actions/user.actions';

const SearchUser = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const search = e.target.search.value;

        try {
            const user = await findUserByRegistroAcademico(search);
            window.location.href = `/profile/${user._id}`;
        } catch (error) {
            alert('Usuario no encontrado');
        }
    };

    return (
        <Dialog>
            <DialogTrigger>
                <Image
                src="/icons/profile.svg"
                alt="comment"
                width={34}
                height={34}
                className="cursor-pointer hover:opacity-70"
                />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        <h2 className="text-2xl font-bold">
                            Buscar Usuario
                        </h2>
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <Label htmlFor="search">Encontrar usuario por registro academico:</Label>
                    <Input type="text" name="search" id="search" required className='my-5' />
                    <DialogFooter>
                        <Button type="submit">Buscar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default SearchUser;