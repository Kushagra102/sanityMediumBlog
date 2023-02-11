import {
    createCurrentUserHook,
    createClient,
} from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-03-25",

    useCdn: process.env.NODE_ENV === "production",
};

// SETTING UP A CLIENT FOR FETCHING DATA IN THE getProps PAGE FUNCTIONS
export const sanityClient = createClient(config);

// Setting up a helper function for generating image URLs with only the assert refernce data in the document
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
// export const useCurrentUser = createCurrentUserHook(config);