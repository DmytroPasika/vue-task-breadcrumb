import { v4 as uuidv4 } from "uuid";
import { reactive, readonly } from "vue";

export interface BreadCrumbsData {
  id: string;
  title: string;
  subGroup: BreadCrumbsData[] | [];
}

export interface Path {
  id: string;
  title: string;
}

export interface SelectedData {
  item: BreadCrumbsData;
  path: Path[];
}

const state = reactive({
  breadCrumbsData: [
    {
      id: `${uuidv4()}`,
      title: "Nav1",
      subGroup: [
        {
          id: `${uuidv4()}`,
          title: "subTitle1",
          subGroup: [
            {
              id: `${uuidv4()}`,
              title: "subSubTitle1",
              subGroup: [
                {
                  id: `${uuidv4()}`,
                  title: "subSubSubTitle1",
                  subGroup: [],
                },
              ],
            },
            {
              id: `${uuidv4()}`,
              title: "subSubTitle2",
              subGroup: [],
            },
          ],
        },
        {
          id: `${uuidv4()}`,
          title: "subTitle2",
          subGroup: [],
        },
      ],
    },
    {
      id: `${uuidv4()}`,
      title: "Nav2",
      subGroup: [
        {
          id: `${uuidv4()}`,
          title: "subTitle1",
          subGroup: [],
        },
        {
          id: `${uuidv4()}`,
          title: "subTitle2",
          subGroup: [],
        },
        {
          id: `${uuidv4()}`,
          title: "subTitle3",
          subGroup: [
            {
              id: `${uuidv4()}`,
              title: "subSubTitle1",
              subGroup: [],
            },
          ],
        },
      ],
    },
    {
      id: `${uuidv4()}`,
      title: "Nav3",
      subGroup: [
        {
          id: `${uuidv4()}`,
          title: "subTitle1",
          subGroup: [],
        },
      ],
    },
  ] as BreadCrumbsData[],
  path: [] as Path[],
});

export function useBreadCrumbds() {
  function setPath(pathItem: Path): void {
    const elementIndex = getElementIndexInPath(pathItem);
    if (elementIndex < 0) {
      state.path.push(pathItem);
    } else {
      clearPathFromItem(pathItem);
    }
  }

  function getElementIndexInPath(pathItem: Path): number {
    const elementIndex = state.path.findIndex((i) => i.id === pathItem.id);
    return elementIndex;
  }

  function clearPathFromItem(pathItem: Path): void {
    const elementIndex = getElementIndexInPath(pathItem);
    if (elementIndex >= 0) state.path.splice(elementIndex, state.path.length);
  }

  function clearPath(): void {
    state.path.splice(0, state.path.length);
  }

  return {
    clearPath,
    clearPathFromItem,
    setPath,
    state: readonly(state),
  };
}
