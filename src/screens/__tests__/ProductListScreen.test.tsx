import React from "react";
//import { render, waitFor, fireEvent } from "@testing-library/react-native";
import axios from "axios";
import ProductListScreen from "../ProductListScreen";

//jest.mock("axios");

//const mockedAxios = axios as jest.Mocked<typeof axios>;

// describe("ProductListScreen", () => {
//   it("fetches and displays products", async () => {
//     const products = [
//       {
//         id: "1",
//         name: "Producto 1",
//         description: "Descripción 1",
//         logo: "https://via.placeholder.com/150",
//         releaseDate: "2024-01-01",
//         reviewDate: "2024-06-01",
//       },
//       {
//         id: "2",
//         name: "Producto 2",
//         description: "Descripción 2",
//         logo: "https://via.placeholder.com/150",
//         releaseDate: "2024-01-01",
//         reviewDate: "2024-06-01",
//       },
//     ];

//     mockedAxios.get.mockResolvedValue({ data: products });

//     const { getByText, getByPlaceholderText } = render(<ProductListScreen />);

//     await waitFor(() => getByText("Producto 1"));

//     expect(getByText("Producto 1")).toBeTruthy();
//     expect(getByText("Producto 2")).toBeTruthy();

//     const searchInput = getByPlaceholderText("Buscar...");
//     fireEvent.changeText(searchInput, "Producto 1");

//     expect(getByText("Cantidad de registros: 1")).toBeTruthy();
//   });

//   it("shows error message on API failure", async () => {
//     mockedAxios.get.mockRejectedValue(new Error("API Error"));

//     const { getByText } = render(<ProductListScreen />);

//     await waitFor(() => getByText("Error al cargar los productos"));

//     expect(getByText("Error al cargar los productos")).toBeTruthy();
//   });
// });
