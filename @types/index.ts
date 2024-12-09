import { SanityImageAssetDocument } from "next-sanity";

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
}