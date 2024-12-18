"use client";

import { useState } from "react";
import { Container, Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import SecretSantaForm from "../components/SecretSantaForm";
import { generateSecretSantaPairs } from "../services/secretSantaServices";
import Head from 'next/head';

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [pairs, setPairs] = useState<{ giver: string; receiver: string }[]>([]);

  const handleFormSubmit = (names: string[]) => {
    setParticipants(names);
    const generatedPairs = generateSecretSantaPairs(names);
    setPairs(generatedPairs);
  };

  return (
    <>
      <Head>
        <title>Secret Santa Generator</title>
        <meta name="description" content="Generate Secret Santa pairs" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add the Google Custom Search Engine script */}
        <script async src="https://cse.google.com/cse.js?cx=813800b72a83d428d"></script>
      </Head>
      <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Secret Santa Generator
        </Typography>
        {/* Add the Google Custom Search Engine search box */}
        <div className="gcse-search"></div>
        <Box sx={{ display: 'flex', width: '100%', mt: 4 }}>
          <Box sx={{ flex: 1, mr: 2 }}>
            <SecretSantaForm onSubmit={handleFormSubmit} />
          </Box>
          <Box sx={{ flex: 1, ml: 2 }}>
            {pairs.length > 0 && (
              <>
                <Typography variant="h5" component="h2" gutterBottom>
                  Generated Pairs:
                </Typography>
                <List>
                  {pairs.map((pair, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={`${pair.giver} -> ${pair.receiver}`} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}