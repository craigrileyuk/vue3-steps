import vue from "@vitejs/plugin-vue";
import path from "path";

export default {
    plugins: [vue()],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/index.js"),
            name: "Vue3Steps",
            formats: ["es", "umd", "cjs", "iife"],
        },
        rollupOptions: {
            external: ["vue"],
            output: {
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
};