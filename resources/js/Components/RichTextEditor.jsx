import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";

import {
    Bold,
    Italic,
    Heading1,
    Heading2,
    List,
    ListOrdered,
    LinkIcon,
} from "lucide-react";

export default function RichTextEditor({
    value,
    onChange,
}) {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Link,
            Placeholder.configure({
                placeholder: "Tulis isi berita di sini...",
            }),
        ],

        content: value,

        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    if (!editor) {
        return null;
    }

    return (
        <div className="border rounded-xl overflow-hidden bg-white">

            {/* Toolbar */}

            <div className="flex items-center gap-2 p-3 border-b bg-gray-50">

                <button
                    type="button"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
                    className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive("bold")
                            ? "bg-gray-200"
                            : ""
                        }`}
                >
                    <Bold size={18} />
                </button>

                <button
                    type="button"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive("italic")
                            ? "bg-gray-200"
                            : ""
                        }`}
                >
                    <Italic size={18} />
                </button>

                <div className="w-px h-6 bg-gray-300" />

                <button
                    type="button"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 1 })
                            .run()
                    }
                    className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive("heading", {
                        level: 1,
                    })
                            ? "bg-gray-200"
                            : ""
                        }`}
                >
                    <Heading1 size={18} />
                </button>

                <button
                    type="button"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 2 })
                            .run()
                    }
                    className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive("heading", {
                        level: 2,
                    })
                            ? "bg-gray-200"
                            : ""
                        }`}
                >
                    <Heading2 size={18} />
                </button>

                <div className="w-px h-6 bg-gray-300" />

                <button
                    type="button"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleBulletList()
                            .run()
                    }
                    className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive("bulletList")
                            ? "bg-gray-200"
                            : ""
                        }`}
                >
                    <List size={18} />
                </button>

                <button
                    type="button"
                    onClick={() =>
                        editor
                            .chain()
                            .focus()
                            .toggleOrderedList()
                            .run()
                    }
                    className={`p-2 rounded-md hover:bg-gray-200 ${editor.isActive("orderedList")
                            ? "bg-gray-200"
                            : ""
                        }`}
                >
                    <ListOrdered size={18} />
                </button>

                <div className="w-px h-6 bg-gray-300" />

                <button
                    type="button"
                    onClick={() => {
                        const url = prompt("Masukkan URL");

                        if (url) {
                            editor
                                .chain()
                                .focus()
                                .setLink({
                                    href: url,
                                })
                                .run();
                        }
                    }}
                    className="p-2 rounded-md hover:bg-gray-200"
                >
                    <LinkIcon size={18} />
                </button>

            </div>

            {/* Editor */}

            <div className="min-h-[400px] p-5">

                <EditorContent
                    editor={editor}
                    className="prose max-w-none focus:outline-none"
                />

            </div>

        </div>
    );
}