'use client'

import { Note as NoteModel } from "@prisma/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import AddEdditNoteDialog from "./AddEditNoteDialog";

interface NoteProps {
    note: NoteModel
}

export default function Note({note}: NoteProps) {
    const wasUpdated = note.updatedAt > note.createdAt
    const [showEditDialog, setShowEditDialog] = useState(false)

    const createdUpdatedAtTimestamp = (
        wasUpdated ? note.updatedAt : note.createdAt
    ).toDateString();

    return (
        <>
        <Card className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setShowEditDialog(true)}
        >
            <CardHeader>
                <CardTitle>{note.title}</CardTitle>
                <CardDescription>
                    {createdUpdatedAtTimestamp}
                    {wasUpdated && " (updated)"}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="whitespace-pre-line">
                    {note.content}
                </p>
            </CardContent>
        </Card>
        <AddEdditNoteDialog
            open={showEditDialog}
            setOpen={setShowEditDialog}
            noteToEdit={note}
        />
        </>
    )
}