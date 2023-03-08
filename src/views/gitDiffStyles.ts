export const gitDiffStyles = `
<!-- React diff view styles https://github.com/otakustay/react-diff-view -->
<style>
  :root {
    --diff-background-color: initial;
    --diff-text-color: initial;
    --diff-font-family: Consolas, Courier, monospace;
    --diff-selection-background-color: #b3d7ff;
    --diff-selection-text-color: var(--diff-text-color);
    --diff-gutter-insert-background-color: #d6fedb;
    --diff-gutter-insert-text-color: var(--diff-text-color);
    --diff-gutter-delete-background-color: #fadde0;
    --diff-gutter-delete-text-color: var(--diff-text-color);
    --diff-gutter-selected-background-color: #fffce0;
    --diff-gutter-selected-text-color: var(--diff-text-color);
    --diff-code-insert-background-color: #eaffee;
    --diff-code-insert-text-color: var(--diff-text-color);
    --diff-code-delete-background-color: #fdeff0;
    --diff-code-delete-text-color: var(--diff-text-color);
    --diff-code-insert-edit-background-color: #c0dc91;
    --diff-code-insert-edit-text-color: var(--diff-text-color);
    --diff-code-delete-edit-background-color: #f39ea2;
    --diff-code-delete-edit-text-color: var(--diff-text-color);
    --diff-code-selected-background-color: #fffce0;
    --diff-code-selected-text-color: var(--diff-text-color);
    --diff-omit-gutter-line-color: #cb2a1d;
  }
</style>
<style>
  :root {
    --diff-background-color: initial;
    --diff-text-color: initial;
    --diff-font-family: Consolas, Courier, monospace;
    --diff-selection-background-color: #b3d7ff;
    --diff-selection-text-color: var(--diff-text-color);
    --diff-gutter-insert-background-color: #d6fedb;
    --diff-gutter-insert-text-color: var(--diff-text-color);
    --diff-gutter-delete-background-color: #fadde0;
    --diff-gutter-delete-text-color: var(--diff-text-color);
    --diff-gutter-selected-background-color: #fffce0;
    --diff-gutter-selected-text-color: var(--diff-text-color);
    --diff-code-insert-background-color: #eaffee;
    --diff-code-insert-text-color: var(--diff-text-color);
    --diff-code-delete-background-color: #fdeff0;
    --diff-code-delete-text-color: var(--diff-text-color);
    --diff-code-insert-edit-background-color: #c0dc91;
    --diff-code-insert-edit-text-color: var(--diff-text-color);
    --diff-code-delete-edit-background-color: #f39ea2;
    --diff-code-delete-edit-text-color: var(--diff-text-color);
    --diff-code-selected-background-color: #fffce0;
    --diff-code-selected-text-color: var(--diff-text-color);
    --diff-omit-gutter-line-color: #cb2a1d;
  }
  .diff {
    background-color: var(--diff-background-color);
    border-collapse: collapse;
    color: var(--diff-text-color);
    table-layout: fixed;
    width: 100%;
  }
  .diff::-moz-selection {
    background-color: #b3d7ff;
    background-color: var(--diff-selection-background-color);
    color: var(--diff-text-color);
    color: var(--diff-selection-text-color);
  }
  .diff::selection {
    background-color: #b3d7ff;
    background-color: var(--diff-selection-background-color);
    color: var(--diff-text-color);
    color: var(--diff-selection-text-color);
  }
  .diff td {
    padding-bottom: 0;
    padding-top: 0;
    vertical-align: top;
  }
  .diff-line {
    font-family: Consolas, Courier, monospace;
    font-family: var(--diff-font-family);
    line-height: 1.5;
  }
  .diff-gutter > a {
    color: inherit;
    display: block;
  }
  .diff-gutter {
    cursor: pointer;
    padding: 0 1ch;
    text-align: right;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  .diff-gutter-insert {
    background-color: #d6fedb;
    background-color: var(--diff-gutter-insert-background-color);
    color: var(--diff-text-color);
    color: var(--diff-gutter-insert-text-color);
  }
  .diff-gutter-delete {
    background-color: #fadde0;
    background-color: var(--diff-gutter-delete-background-color);
    color: var(--diff-text-color);
    color: var(--diff-gutter-delete-text-color);
  }
  .diff-gutter-omit {
    cursor: default;
  }
  .diff-gutter-selected {
    background-color: #fffce0;
    background-color: var(--diff-gutter-selected-background-color);
    color: var(--diff-text-color);
    color: var(--diff-gutter-selected-text-color);
  }
  .diff-code {
    word-wrap: break-word;
    padding: 0 0 0 0.5em;
    white-space: pre-wrap;
    word-break: break-all;
  }
  .diff-code-edit {
    color: inherit;
    display: inline-block;
  }
  .diff-code-insert {
    background-color: #eaffee;
    background-color: var(--diff-code-insert-background-color);
    color: var(--diff-text-color);
    color: var(--diff-code-insert-text-color);
  }
  .diff-code-insert .diff-code-edit {
    background-color: #c0dc91;
    background-color: var(--diff-code-insert-edit-background-color);
    color: var(--diff-text-color);
    color: var(--diff-code-insert-edit-text-color);
  }
  .diff-code-delete {
    background-color: #fdeff0;
    background-color: var(--diff-code-delete-background-color);
    color: var(--diff-text-color);
    color: var(--diff-code-delete-text-color);
  }
  .diff-code-delete .diff-code-edit {
    background-color: #f39ea2;
    background-color: var(--diff-code-delete-edit-background-color);
    color: var(--diff-text-color);
    color: var(--diff-code-delete-edit-text-color);
  }
  .diff-code-selected {
    background-color: #fffce0;
    background-color: var(--diff-code-selected-background-color);
    color: var(--diff-text-color);
    color: var(--diff-code-selected-text-color);
  }
  .diff-widget-content {
    vertical-align: top;
  }
  .diff-gutter-col {
    width: 7ch;
  }
  .diff-gutter-omit {
    height: 0;
  }
  .diff-gutter-omit:before {
    background-color: #cb2a1d;
    background-color: var(--diff-omit-gutter-line-color);
    content: ' ';
    display: block;
    height: 100%;
    margin-left: 4.6ch;
    overflow: hidden;
    white-space: pre;
    width: 2px;
  }
  .diff-decoration {
    line-height: 1.5;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  .diff-decoration-content {
    font-family: Consolas, Courier, monospace;
    font-family: var(--diff-font-family);
    padding: 0;
  }
</style>
`;
