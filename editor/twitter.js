CMS.registerEditorComponent({
    id: "twitter",
    label: "Twitter",
    fields: [
        {
            name: "user",
            label: "User",
            widget: "string"
        },
        {
            name: "id",
            label: "Tweet id",
            widget: "string"
        }
    ],
    pattern: /{{< tweet ([a-zA-Z0-9]+) >}}/,
    fromBlock: function(match) {
        return {
            user: match[1],
            id: match[2]
        };
    },
    toBlock: function(obj) {
        return `{{< tweet user="${obj.user}" id="${obj.id}" >}}`;
    },
    toPreview: function(obj) {
        return `{{< tweet user="${obj.user}" id="${obj.id}" >}}`;
    },
});
