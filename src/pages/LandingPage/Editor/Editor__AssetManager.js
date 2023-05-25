export const AssetManager = (id) =>  {
    return {
        upload: `/api/v1/assets/${id}/upload`,
        uploadName: 'lpImage'
    }
  }