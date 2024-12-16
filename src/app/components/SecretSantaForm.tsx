import { FC, useState } from "react";
import { TextField, Button, Box, Typography, Container } from "@mui/material";

interface SecretSantaFormProps {
  onSubmit: (names: string[]) => void;
}

const SecretSantaForm: FC<SecretSantaFormProps> = ({ onSubmit }) => {
  const [numParticipants, setNumParticipants] = useState<number | "">(0);
  const [names, setNames] = useState<string[]>([]);

  const handleNumParticipantsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const num = parseInt(event.target.value, 10);
    if (!isNaN(num) && num >= 0 && num <= 100) { // Add validation to ensure the number is within a reasonable range
      setNumParticipants(num);
      setNames(Array(num).fill(""));
    } else {
      setNumParticipants("");
      setNames([]);
    }
  };

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...names];
    newNames[index] = value;
    setNames(newNames);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (names.every(name => name.trim() !== "")) {
      onSubmit(names);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 4,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <TextField
          type="number"
          value={numParticipants === "" ? "" : numParticipants.toString()}
          onChange={handleNumParticipantsChange}
          label="Number of participants"
          variant="outlined"
          fullWidth
        />
        {Array.from({ length: numParticipants === "" ? 0 : numParticipants }).map((_, index) => (
          <TextField
            key={index}
            type="text"
            value={names[index] || ""}
            onChange={(e) => handleNameChange(index, e.target.value)}
            label={`Participant ${index + 1}`}
            variant="outlined"
            fullWidth
          />
        ))}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Generate Pairs
        </Button>
      </Box>
    </Container>
  );
};

export default SecretSantaForm;