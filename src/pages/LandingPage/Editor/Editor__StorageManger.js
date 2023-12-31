export const StorageManager = (id, pageType) => {
    return{
    type: "remote",
    autosave: false,
    contentTypeJson: true,
    storeComponents: true,
    storeStyles: true,
    storeHtml: true,
    storeCss: true,
    headers: {
      "Content-Type": "application/json",
    },
    options: {
      remote: {
        id: "myzer-",
        urlStore: `/api/v1/${pageType}/${id}/content`,
        onStore: (data, editor) => {
          const pagesHtml = editor.Pages.getAll().map(page => {
            const component = page.getMainComponent();
            return {
              html: editor.getHtml({ component }),
              css: editor.getCss({ component })
            }
          });
          return { data, pagesHtml };
        },
        urlLoad: `/api/v1/${pageType}/${id}/content`,
        onLoad: (result) => {
          var finalResult=result.data;
          if (!result.page.data){
            var finalResult = {}
        }
          return finalResult
        }
      }
    }
}
}