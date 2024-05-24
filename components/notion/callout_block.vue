<script setup lang="ts">
const { child } = defineProps(["child"]);
import { format } from "~/utils/mdToHtml";
</script>

<template>
  <div style="width: 100%; margin-top: 4px; margin-bottom: 4px">
    <div style="display: flex">
      <div
        style="
          display: flex;
          width: 100%;
          border-radius: 4px;
          background: rgb(241, 241, 239);
          padding: 16px 16px 16px 12px;
        "
      >
        <div>
          <div
            style="
              user-select: none;
              transition: background 20ms ease-in 0s;
              display: flex;
              align-items: center;
              justify-content: center;
              height: 24px;
              width: 24px;
              border-radius: 0.25em;
              flex-shrink: 0;
            "
          >
            <div
              style="
                display: flex;
                align-items: center;
                justify-content: center;
                height: 24px;
                width: 24px;
              "
            >
              <div
                style="
                  height: 21.6px;
                  width: 21.6px;
                  font-size: 21.6px;
                  line-height: 1;
                  margin-left: 0px;
                  color: black;
                "
              >
                <span
                  role="img"
                  style="
                    font-family: 'Apple Color Emoji', 'Segoe UI Emoji',
                      NotoColorEmoji, 'Noto Color Emoji', 'Segoe UI Symbol',
                      'Android Emoji', EmojiSymbols;
                    line-height: 1em;
                    white-space: nowrap;
                  "
                >
                  {{ child.props.emogi }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          style="
            display: flex;
            flex-direction: column;
            min-width: 0px;
            margin-left: 8px;
            width: 100%;
          "
        >
          <div
            style="
              max-width: 100%;
              width: 100%;
              white-space: pre-wrap;
              word-break: break-word;
              caret-color: rgb(55, 53, 47);
              padding-left: 2px;
              padding-right: 2px;
            "
          >
            <span v-html="format(child)"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
