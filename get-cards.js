import { getPersonFromBackend } from "./get-card-api";

export function loadCards() {
    const CARDS = getPersonFromBackend();
}