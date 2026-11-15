# ComfyUI Local Memory Shortcuts

[English](#english) | [中文](#中文)

## 中文

在 ComfyUI 顶部工具栏添加两个内存管理快捷按钮，兼容新版 Manager：

- **卸载模型**：卸载 ComfyUI 当前管理的模型。
- **卸载模型和执行缓存**：卸载模型并清理执行缓存。

按钮调用 ComfyUI 自带命令，悬停可查看中文提示。样式与 XPUSYS Monitor 协调；未安装 XPUSYS 时使用默认样式。

### 安装

将本仓库克隆到 ComfyUI 的 `custom_nodes` 目录：

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/BringGh/ComfyUI-Local-Memory-Shortcuts.git
```

然后重启 ComfyUI 并刷新浏览器。无需安装额外的 Python 依赖。

### 使用说明

在顶部工具栏点击对应的吸尘器图标。建议在任务结束后使用；卸载模型后，下次运行可能需要重新加载。释放的内存取决于当前模型和缓存的使用情况。

本扩展已在 ComfyUI 0.44.2、前端 1.57.6 上测试。其他版本的兼容性取决于 ComfyUI 的工具栏及命令接口。

## English

Adds two memory management buttons to the ComfyUI top toolbar, compatible with the modern Manager interface:

- **Unload models**: unload models managed by ComfyUI.
- **Unload models and execution cache**: unload models and clear the execution cache.

The buttons call ComfyUI's built-in commands. Tooltips are in Chinese. The styling follows XPUSYS Monitor when available and uses a fallback when it is not installed.

### Installation

```bash
cd ComfyUI/custom_nodes
git clone https://github.com/BringGh/ComfyUI-Local-Memory-Shortcuts.git
```

Restart ComfyUI and refresh the browser. No additional Python dependencies are required.

Use the vacuum icons after a task finishes. Unloading models can make the next generation slower because the models may need to reload. The amount of memory released depends on the models and caches currently in use.

Tested with ComfyUI 0.44.2 and frontend 1.57.6. Compatibility with other versions depends on ComfyUI's toolbar and command interfaces.
