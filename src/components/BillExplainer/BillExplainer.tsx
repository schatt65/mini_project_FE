import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #0078d4;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
`;

const ExplanationBox = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f3f9ff;
  border-left: 4px solid #0078d4;
  border-radius: 4px;
  white-space: pre-wrap;
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 1rem;
`;

const BillExplainer: React.FC = () => {
  const [billJson, setBillJson] = useState<string>("");
  const [explanation, setExplanation] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleExplain = async () => {
    setLoading(true);
    setError("");
    setExplanation("");

    try {
      const parsedBill = JSON.parse(billJson);
      const response = await axios.post("/api/explain-bill", {
        bill: parsedBill,
      });
      setExplanation(response.data.explanation);
    } catch (err: any) {
      setError(
        "Failed to explain the bill. Please check your JSON and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <h2>AI Bill Explainer</h2>
      <TextArea
        placeholder="Paste customer bill JSON here..."
        value={billJson}
        onChange={(e) => setBillJson(e.target.value)}
      />
      <Button onClick={handleExplain} disabled={loading}>
        {loading ? "Explaining..." : "Explain My Bill"}
      </Button>
      {error && <ErrorText>{error}</ErrorText>}
      {explanation && <ExplanationBox>{explanation}</ExplanationBox>}
    </Container>
  );
};

export default BillExplainer;
