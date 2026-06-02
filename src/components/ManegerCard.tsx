import {
  Card,
  CardContent,
  CircularProgress,
  Link,
  Typography,
} from "@mui/material";
import { useGetOne, useRecordContext } from "react-admin";

export const ManagerCard = () => {
  const intern = useRecordContext();

  const {
    data: manager,
    isPending,
    error,
  } = useGetOne(
    "employees",
    { id: intern?.managerId },
    { enabled: !!intern?.managerId },
  );

  if (!intern?.managerId)
    return (
      <Typography color="textSecondary">Aucun manager assigné.</Typography>
    );
  if (isPending) return <CircularProgress size={20} />;
  if (error)
    return (
      <Typography color="error">
        Erreur lors du chargement du manager
      </Typography>
    );

  return (
    <Card sx={{ mt: 2, minWidth: 275, bgcolor: "#f5f5f5" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Fiche Manager
        </Typography>
        <Typography>
          Nom Complet : {manager.firstName} {manager.lastName}
        </Typography>
        <Typography>Département : {manager.department}</Typography>
        <Typography>
          Email :{" "}
          <Link href={`mailto:${manager.email}`}>
            {manager.email || "non renseigné"}
          </Link>
        </Typography>
        <Typography>
          Statut : {manager.active ? " Actif" : " Inactif"}
        </Typography>
      </CardContent>
    </Card>
  );
};
