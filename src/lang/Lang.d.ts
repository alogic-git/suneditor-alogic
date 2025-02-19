export interface Lang {
  code: string;
  toolbar: {
    default: string;
    save: string;
    font: string;
    formats: string;
    fontSize: string;
    bold: string;
    underline: string;
    italic: string;
    strike: string;
    subscript: string;
    superscript: string;
    removeFormat: string;
    fontColor: string;
    hiliteColor: string;
    indent: string;
    outdent: string;
    align: string;
    alignLeft: string;
    alignRight: string;
    alignCenter: string;
    alignJustify: string;
    list: string;
    orderList: string;
    unorderList: string;
    horizontalRule: string;
    hr_solid: string;
    hr_dotted: string;
    hr_dashed: string;
    table: string;
    link: string;
    math: string;
    image: string;
    video: string;
    audio: string;
    fullScreen: string;
    showBlocks: string;
    codeView: string;
    undo: string;
    redo: string;
    preview: string;
    print: string;
    tag_p: string;
    tag_div: string;
    tag_h: string;
    tag_blockquote: string;
    tag_pre: string;
    template: string;
    lineHeight: string;
    paragraphStyle: string;
    textStyle: string;
    imageGallery: string;
    dir_ltr: string;
    dir_rtl: string;
    mention: string;
  };
  dialogBox: {
    linkBox: {
      title: string;
      url: string;
      text: string;
      newWindowCheck: string;
      downloadLinkCheck: string;
      bookmark: string
    };
    mathBox: {
      title: string;
      inputLabel: string;
      fontSizeLabel: string;
      previewLabel: string
    };
    imageBox: {
      title: string;
      file: string;
      url: string;
      altText: string
    };
    videoBox: {
      title: string;
      file: string;
      url: string
    };
    audioBox: {
      title: string;
      file: string;
      url: string
    };
    browser: {
      tags: string;
      search: string;
    };
    caption: string;
    close: string;
    submitButton: string;
    revertButton: string;
    proportion: string;
    basic: string;
    left: string;
    right: string;
    center: string;
    width: string;
    height: string;
    size: string;
    ratio: string
  };
  controller: {
    edit: string;
    unlink: string;
    remove: string;
    insertRowAbove: string;
    insertRowBelow: string;
    deleteRow: string;
    insertColumnBefore: string;
    insertColumnAfter: string;
    deleteColumn: string;
    fixedColumnWidth: string;
    resize100: string;
    resize75: string;
    resize50: string;
    resize25: string;
    autoSize: string;
    mirrorHorizontal: string;
    mirrorVertical: string;
    rotateLeft: string;
    rotateRight: string;
    maxSize: string;
    minSize: string;
    tableHeader: string;
    mergeCells: string;
    splitCells: string;
    copyToClipboard: string
    HorizontalSplit: string;
    VerticalSplit: string
  };
  menu: {
    spaced: string;
    bordered: string;
    neon: string;
    translucent: string;
    shadow: string
    code: string
  };
}