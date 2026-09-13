import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import ProjectGallery from "./ProjectGallery";

vi.mock("swiper/react", () => ({
  Swiper: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper">{children}</div>
  ),
  SwiperSlide: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="swiper-slide">{children}</div>
  ),
}));

vi.mock("swiper/modules", () => ({
  Navigation: {},
  Pagination: {},
}));

describe("ProjectGallery", () => {
  it("renders nothing when there are no images", () => {
    const { container } = render(<ProjectGallery images={[]} />);

    expect(container.firstChild).toBeNull();
  });

  it("renders all project images", () => {
    const images = [
      {
        id: 1,
        imageUrl: "https://example.com/image-1.jpg",
        displayOrder: 1,
        altText: "Project screenshot",
      },
      {
        id: 2,
        imageUrl: "https://example.com/image-2.jpg",
        displayOrder: 2,
        altText: "Project dashboard",
      },
    ];

    render(<ProjectGallery images={images} />);

    expect(screen.getByTestId("swiper")).toBeInTheDocument();
    expect(screen.getAllByTestId("swiper-slide")).toHaveLength(2);
    expect(screen.getByAltText("Project screenshot")).toBeInTheDocument();
    expect(screen.getByAltText("Project dashboard")).toBeInTheDocument();
  });

  it("uses the default alt text when altText is null", () => {
    const images = [
      {
        id: 1,
        imageUrl: "https://example.com/image.jpg",
        displayOrder: 1,
        altText: null,
      },
    ];

    render(<ProjectGallery images={images} />);

    expect(screen.getByAltText("Project image")).toBeInTheDocument();
  });
});
