import {reactive} from 'vue'

export const store = reactive ({
    getCards: [],
    api: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    getType: [],
    apiType: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    selectedType: "",
    typeArchetype: 'archetype'
})