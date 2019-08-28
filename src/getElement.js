import { getClientVoid, getServerVoid } from "./getVoid";
import { getClientNonVoid, getServerNonVoid } from "./getNonVoid";

const isServer = typeof window === "undefined";

const elements = {};

export default ({ tag, isVoid }) => {
  if (isServer) {
    if (isVoid) return getServerVoid(tag);

    return getServerNonVoid(tag);
  }

  if (!elements[tag]) {
    if (isVoid) {
      elements[tag] = getClientVoid(tag);
    } else {
      elements[tag] = getClientNonVoid(tag);
    }
  }

  return elements[tag];
};
