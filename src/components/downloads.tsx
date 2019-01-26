import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Download } from '../types/gatsby-types';
import DownloadList from './download-list';
import DownloadListItem from './download-list-item';
import Section from './section';
import SectionTitle from './section-title';
import Wrapper from './wrapper';

const downloadsQuery = graphql`
  query Downloads {
    prismicEpk {
      data {
        downloads {
          download_name
          download_file {
            name
            kind
            url
            size
          }
          download_image {
            alt
            localFile {
              childImageSharp {
                fluid(maxWidth: 160, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Downloads = () => (
  <StaticQuery
    query={downloadsQuery}
    render={data => {
      const downloads: Download[] = data.prismicEpk.data.downloads;

      return (
        <Section id="downloads" variation="secondary">
          <Wrapper small={true}>
            <SectionTitle>Downloads</SectionTitle>
            <DownloadList>
              {downloads.map(download => (
                <DownloadListItem
                  name={download.download_name}
                  size={download.download_file.size}
                  type={download.download_file.kind}
                  url={download.download_file.url}
                  image={download.download_image.localFile.childImageSharp.fluid}
                  imageAlt={download.download_image.alt}
                  key={download.download_name}
                />
              ))}
            </DownloadList>
          </Wrapper>
        </Section>
      );
    }}
  />
);

export default Downloads;
