export class MenuList {
    constructor(
        public name: string,
        public route: string,
        public toolTip: string,
        public icon: string = ''
    ) {}
}

export const menuListInstances = [
    new MenuList('Pokemon', 'pokemon', 'Pokemon', 'catching_pokemon'),
    new MenuList('Weather', 'weather', 'Weather', 'cloud'),
    new MenuList('Video', 'viedo', 'Video', 'video_library'),
    new MenuList('Tasks', 'task', 'Tasks', 'task'),
    new MenuList('Canvas', 'canvas', 'Canvas', 'draw'),
    new MenuList('Dasboard', 'dashboard', 'Dasboard', 'dashboard'),
];