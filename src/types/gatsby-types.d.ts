import { FluidObject } from "gatsby-image";

export interface Release {
  release_name: {
    text: string;
  }
  release_year: number;
  release_image: {
    alt: string;
    localFile: {
      childImageSharp: {
        fluid: FluidObject;
      }
    }
  }
}
