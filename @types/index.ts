/* eslint-disable @typescript-eslint/no-namespace */
import { PortableTextBlock, SanityImageAssetDocument } from "next-sanity";

export namespace SanityTypes {
   export interface Publication {
      _id: string;
      _createdAt: Date;
      _updatedAt: Date;
      title: string;
      description: string;
      slug: { current: string },
      image: SanityImageAssetDocument
   }

   export interface Project {
      _id: string;
      _createdAt: Date;
      _updatedAt: Date;
      title: string;
      description: string;
      slug: { current: string },
      image: SanityImageAssetDocument
   }

   export interface Landing {
      _id: string;
      _createdAt: Date;
      _updatedAt: Date;
      title: string;
      intro: PortableTextBlock[];
   }

   export interface Resume {
      _id: string;
      _createdAt: Date;
      _updatedAt: Date;
      title: string;
      intro: PortableTextBlock[];
      experience: PortableTextBlock[];
      education: PortableTextBlock[];
   }
}