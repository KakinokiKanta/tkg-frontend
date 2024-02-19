type CharacterApi = {
  character: string;
  developmentStage: "first" | "second" | "third";
};

type AllCharacterApi = {
  name: string;
  isDeveloped: boolean;
}[];
