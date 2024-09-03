import { Button } from "@mui/material";

interface ButtonProp {
  text: string;
}

export const BaseButton = ({ text }: ButtonProp) => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        mt: 2,
        backgroundColor: "#ba68c8",
        color: "#FFFFFF",
        "&:hover": {
          backgroundColor: "#ab47bc",
        },
      }}
    >
      {text}
    </Button>
  );
};
