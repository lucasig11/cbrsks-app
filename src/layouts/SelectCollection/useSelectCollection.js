import { useState, useEffect } from "react";
import user from "../../services/user.service";

const useSelectCollection = () => {
  const [active, setActive] = useState(true);
  const [collections, setCollections] = useState(["Loading..."]);
  const [collectionSelected, setCollectionContext] = useState(false);

  useEffect(() => {
    const getCollections = async () => {
      try {
        const { collections: apiCollections } = await user.getUserCollections();
        const { hasCollection } = await user.checkUserCollection();

        if (apiCollections?.length === 0 || apiCollections === undefined || hasCollection) {
          setActive(false);
        } else {
          setCollections(apiCollections);
          setCollectionContext(apiCollections.length === 1 ? apiCollections[0] : false);
        }
      } catch (error) {
        setActive(false);
      }
    };
    getCollections();
  }, []);

  const saveCollection = async () => {
    try {
      await user.saveUserCollection(collectionSelected);

      setActive(false);
    } catch (error) {
      console.log("saveuserCollection", error);
    }
  };

  return {
    collections,
    collectionSelected,
    setCollectionContext,
    saveCollection,
    active,
  };
};

export default useSelectCollection;
