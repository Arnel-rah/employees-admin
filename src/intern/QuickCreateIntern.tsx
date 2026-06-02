import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import {
  Form,
  ReferenceInput,
  SelectInput,
  TextInput,
  useCreate,
  useNotify,
  useRefresh,
} from "react-admin";

export const QuickCreateInternButton = () => {
  const [open, setOpen] = useState(false);
  const [create, { isLoading }] = useCreate();
  const notify = useNotify();
  const refresh = useRefresh();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = (data: any) => {
    create(
      "interns",
      {
        data: {
          firstname: data.firstname,
          lastname: data.lastname,
          managerId: data.managerId,
          isRemunerate: false,
          department: "Informatique",
        },
      },
      {
        onSuccess: () => {
          notify("Stagiaire créé avec succès !", { type: "success" });
          refresh();
          handleClose();
        },
        onError: (err: any) => {
          notify(`Échec de création : ${err.message}`, { type: "warning" });
        },
      },
    );
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen} sx={{ ml: 1 }}>
        Ajouter stagiaire rapide
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>Création Rapide Stagiaire</DialogTitle>
        <Form onSubmit={handleSave}>
          <DialogContent>
            <Box display="flex" flexDirection="column" gap={2}>
              <TextInput source="firstname" label="Prénom" fullWidth />
              <TextInput source="lastname" label="Nom" fullWidth />
              <ReferenceInput source="managerId" reference="employees">
                <SelectInput
                  label="Manager"
                  optionText={(c) => `${c.firstname} ${c.lastname}`}
                  fullWidth
                />
              </ReferenceInput>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} disabled={isLoading}>
              Annuler
            </Button>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={isLoading}
            >
              Créer
            </Button>
          </DialogActions>
        </Form>
      </Dialog>
    </>
  );
};
