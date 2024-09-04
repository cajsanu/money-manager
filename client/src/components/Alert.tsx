import Alert from "@mui/material/Alert";
import { Box } from "@mui/system";
import { useAppSelector } from "../hooks";

export const Alerts = () => {
  const {alert, severity} = useAppSelector((state) => state.alert);

  if (alert) {
    return (
      <Box>
        <Alert severity={severity} >{alert}</Alert>
      </Box>
    );
  }
};
