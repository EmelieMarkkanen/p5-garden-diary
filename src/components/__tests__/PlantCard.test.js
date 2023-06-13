import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import PlantCard from "../PlantCard";

const plant = {
    id: 1,
    name: "Sunflower",
    image: "sunflower.jpg",
    planted_at: "2021-06-01",
};

test("renders PlantCard component", () => {
    render(<PlantCard plant={plant} />);
});

test("renders the planted date", () => {
    const { getByText } = render(<PlantCard plant={plant} />);
    const plantedDate = getByText(`Planted: ${plant.planted_at}`);
    expect(plantedDate).toBeInTheDocument();
  });

  test("renders the plant name", () => {
    const { getByText } = render(<PlantCard plant={plant} />);
    const plantName = getByText(plant.name);
    expect(plantName).toBeInTheDocument();
  });

  test("renders the plant image with correct src and alt attributes", () => {
    const { getByAltText } = render(<PlantCard plant={plant} />);
    const plantImage = getByAltText(plant.name);
    expect(plantImage).toHaveAttribute("src", plant.image);
    expect(plantImage).toHaveAttribute("alt", plant.name);
  });

test("navigates to the plant details page on click", () => {
    const history = createMemoryHistory();
    const { getByText } = render(
        <Router history={history}>
            <PlantCard plant={plant} />
        </Router>
    );

    const card = getByText(plant.name);
    fireEvent.click(card);

    expect(history.location.pathname).toBe(`/plants/${plant.id}`);
});
