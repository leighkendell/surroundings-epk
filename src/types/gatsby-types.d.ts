import { FluidObject } from "gatsby-image";

export interface Image {
  alt: string;
  localFile: {
    childImageSharp: {
      fluid: FluidObject;
    }
  }
}

export interface Release {
  release_name: {
    text: string;
  }
  release_year: number;
  release_image: Image
}

export interface Video {
  video_name: {
    text: string;
  }
  video_year: number;
  video_image: Image
  video_link: {
    url: string;
  }
}

export interface Download {
  download_name: string;
  download_file: {
    size: string;
    kind: string;
    url: string;
  }
  download_image: Image;
}
