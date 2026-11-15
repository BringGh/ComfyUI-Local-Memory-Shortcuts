import { app } from "../../scripts/app.js";

const GROUP_ID = "local-memory-shortcuts";

const shortcuts = [
    {
        command: "Comfy.Memory.UnloadModels",
        icon: "mdi-vacuum-outline",
        title: "卸载模型",
    },
    {
        command: "Comfy.Memory.UnloadModelsAndExecutionCache",
        icon: "mdi-vacuum",
        title: "卸载模型和执行缓存",
    },
];

function createButton({ command, icon, title }) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "local-memory-shortcut";
    button.title = title;
    button.setAttribute("aria-label", title);

    const iconElement = document.createElement("i");
    iconElement.className = `mdi ${icon}`;
    button.append(iconElement);

    button.addEventListener("click", async () => {
        button.disabled = true;
        try {
            await app.extensionManager.command.execute(command);
        } catch (error) {
            console.error(`[Local Memory Shortcuts] ${command} failed`, error);
            window.alert(`执行“${title}”失败，请查看浏览器控制台。`);
        } finally {
            button.disabled = false;
        }
    });
    return button;
}

app.registerExtension({
    name: "Local.MemoryShortcuts",
    setup() {
        if (document.getElementById(GROUP_ID)) return;

        const anchor = app.menu?.settingsGroup?.element;
        if (!anchor?.parentElement) {
            console.warn("[Local Memory Shortcuts] 顶部工具栏不可用，未添加按钮。");
            return;
        }

        const stylesheet = document.createElement("link");
        stylesheet.rel = "stylesheet";
        stylesheet.href = new URL("./memory_shortcuts.css", import.meta.url).href;
        document.head.append(stylesheet);

        const group = document.createElement("div");
        group.id = GROUP_ID;
        group.className = "local-memory-shortcuts";
        group.append(...shortcuts.map(createButton));
        anchor.before(group);
    },
});
