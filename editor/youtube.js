CMS.registerEditorComponent({
    id: "youtube",
    label: "Youtube",
    fields: [
        {
            name: "id",
            label: "Youtube Video ID",
            widget: "string"
        },
        {
            name: "title",
            label: "Title of this video",
            widget: "string"
        }
    ],
    pattern: /{{< youtube\s+(?<id>[A-Za-z0-9\-]+)\s+>}}/,
    fromBlock: function(match) {
        return {
            id: match[1],
            title: match[2],
        };
    },
    toBlock: function(obj) {
        return `{{< youtube id="${obj.id}" title="${obj.title}" >}}`;
    },
    toPreview: function(obj) {
        return `<img src="https://i3.ytimg.com/vi/${obj.id}/hqdefault.jpg" alt="" />`;
    },
});
