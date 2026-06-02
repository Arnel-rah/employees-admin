import React from 'react';
import { useRecordContext, useUpdate, useNotify } from 'react-admin';
import { Button } from '@mui/material';

export const QuickStatusToggle = () => {
    const record = useRecordContext();
    const notify = useNotify();

    const [update, { isLoading }] = useUpdate();

    if (!record) return null;

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();

        update(
            'employees',
            {
                id: record.id,
                data: { active: !record.active },
                previousData: record
            },
            {
                onSuccess: () => {
                    notify(`Statut mis à jour : ${!record.active ? 'Actif' : 'Inactif'}`, { type: 'info' });
                },
                onError: (error: any) => {
                    notify(`Erreur: ${error.message}`, { type: 'warning' });
                }
            }
        );
    };

    return (
        <Button
            variant="contained"
            size="small"
            color={record.active ? "error" : "success"}
            disabled={isLoading}
            onClick={handleToggle}
        >
            {record.active ? "Désactiver" : "Activer"}
        </Button>
    );
};
