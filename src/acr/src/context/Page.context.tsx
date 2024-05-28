export const mockSitecoreContext = {
  route: {
    fields: {
      contentType: {
        name: 'tag',
        fields: {
          title: {
            value: 'tag',
          },
        },
      },
      image1x1: {
        value: {
          src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArwMBIgACEQEDEQH/xAAcAAADAQEBAQEBAAAAAAAAAAABAgMABAcGBQj/xAA1EAABAwMCBAUCBAUFAAAAAAABAAIRAwQhEjEFQVFxBhMiYZEHgRQjMqFCUrHB0RUWF3Tx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEBAQEAAgEDBAMAAAAAAAAAABEBAhIDEyExBBRBUSIyUv/aAAwDAQACEQMRAD8A+haE4WaE4C4q6oLUwlYBMEUjs1GAMlMCRvulY7TBBIcmJJyTJ906RgcJpUwmlVS02FoCWUZVURiEIWlKTlOluA4JCmKUlPNKJlISnOFNydKFckcmJU3FOlE3KTlV5yI+6m6IRTiLpUnxyJ+6qVF0JUo/f0EIhqqE0Bef3dnVGMpgnhaFXZPUoCYIwOSMKuxbgIhZZVnIoyxRSlVUwSW6fdKSslKrNEAlKUSUrkUoUhIQmJSOKqlCFIU5U3J0RN26k5VcpuRSiLlJys9RcMooj6cbI4XO2eqoHdV5rtUCO6QFNKdKGaSDhZAFGQqzS3AhZFaFdTCygUUFWci3CpSmSlVmphSlOUxSEp0oBSFMUhKdKFKRwTEqbinQRym5O5TJwiiJuUnKjipOhOk+gCYIwiIXmdnZGRWhZV2KDOFpQWlVmlDSjqSStKrNENK/E8ReJ+G8Apj8ZWPnEEspMEu+/Qe6/Y1fdeI+OTQvfFt6Q4UiagpkVKRbMCNXuPdb+DjnPZrLycuuP2b/AOp99Xt20rC0p29xJ1vcQ8RyhQ4X9SOK0q4PEfw9zQEgtY0NfsYjlvC+Orim38gUyK7Dp1NEh3cdfdF9mX27rmmYotADnEQHO5x15bLtzx8J8OXvyr1rgPj2w4vf07Kpb1batUHoc9wLHHeJ5L6vdfzjTZLwA8apEGdl6d9OvERqUq9jxfiDH1GEeQar/U4bRJ35RzysfL4plxpx8l9tfekpSfYfdEpHFYVrGc4dPhTcR0Pys4qbinRAcVJxTOKk4p0oVxUnJyVIlMn08LJdSGteTXfDo4Uy5bUrwoeVpU9SxOVVRuHJQlIXISrzUvl/qLxK74fwqh+DfVp66v5lSifUANgO5heSX3Ebm/rebf3RuaoEaqkHC9Q+oPEL5lOnYcOIf57dFW2dRcTVnPpdEYAMwZXmtS7ua1E2FG2t2NENc2nTy4zuSTM9vhen9Nn8HH5v7JV72peutmOpUtTAGTtrziT+0rnLa1MPovy3BdEEDp/dJTcyk5zarC4jeTsuilUszT0V6NRlWQ0OpkRGckdcj4XSxqXmMD4fTDwAW/tgymtqraVejchrJpPa7yw4jVBn7ctk1uy1Ip+a0vkuBGsiekQN/wBl9JwPwxbcRpXlq11W34lTIqW/nEtcGhxGQMERGd5S5cs457jM3fh6VwDidXivC6d5Xtzb1HOc11Iz6SDHNdzigxoYxrASQ0RJGSg4rzN277OzM9gcVJxRcVN5jdOgHFScVnvA3I9pK4LzitpaVhSrPhxcAcYH3+E8Tcx1uKmSvn7rxdZ0a76QaXFr4BacOC5R4woPrN0D8sSHNI9R6Qr68i78X5lp9Q+J2x1VWCs3RDWuecb5J57/ALBdLvqTxWpDzSt6bGtEsAJLuuflfBl41Z2hbUSOsrp+28X+WPreT9vTKH1QZ5QdcWBLg4A6XRiD/gIXX1QYHarXhznMAiKjwMnnP2/deafwge8owYa0fcqftPDbFev5JK9NtvqWx1BjbqzLa2klxZluBiJ6/sv2LLx9wSsGCtcOZUgatVIgE8yPZeN6jJIBRhxEaScbpb9J4/weefnj2z/enBW2za1a7DWumG7kgGJx8wv0bfjXDbhgfSvrd7S7Th436LwXy6hBimcmZhMKFTfyp7qN+k4T21Xr8v09p8XULziXAa1HhLqdSsXgGDJIkSAeR59gviqPgC+bb0xXze1Xkny3eljRn9XUkjtC+ZtLzidnS8q1uK9CmTJayqWglVfxPjFURUvrpw/7Dv8AKrh4+XDJx1PLnx5e+4vf8Hu7GhdMqcOr+RRuA5ld9MGNwWk8xMd4S8H8JcV4pSt69KhFrXdAqPOwHM9FyVX31U6qte4eYj11if7pGNuBSFLzqmn+QVDHwtu25nyzmV6F/wAc8PdTpAXFwHgQSAIcZnK6eH2/hzgFyyo/iFI3dNnll7qpJkCCYzHb3Xmzm3xGH1S0iD+cfjdJ+FuWnS6lDe6y6bvzyX2z8Y9fd4o4IDH+oUu4lcPEfGnCLURTrGu/owH+q8pqNrSQ2kdPRRdrAgiIPRLPp+P7Hqcn3vE/HzalB7LW3cxxbEuInuvwKvivipaxrriRlpB5yvn3EzgDEZSlwJzvMytc8PDGe8t1+vdcdv6rBTrXlWowRAnbouJ11XfDaldxaDqDSSc/5XHmD3TkxnmcdleccxN0fNL3TEdSg7XuDnmkccfdYOkKoF/J92oii3+JyeS7p2W0uxAhKrjClSjckpgymM6T8rMbJOrknDNi7SB7qboFppiYYDKYPZPTsErmiCcHthBuloBgJbQsKjerkvmAHS4xPXoo1Kk/oEf2SNdq9NMb80QOvzWH9Dp9gmYXE7ETsUJYww50uIGU7quzWlxEZKjVGcNOHZdHdAVAzJBlSdVayRqnluoeZ6xBR1N3MqhxgAz3V/NGkh8xyzkLhoNn1ahuul5ZOMqdyBqjmkxUz781EiW9R2VKznAA7woiq1wlphyeDSPZScNhPZRdbtI9Ks9zXnP6hzSFxGYHdXm6ncc77dzf0wVI04BBxhdnmfyYHNDWw7791fYo4XNnqhHwuxwY7aZ7qbqUdB906UAPd7IipEyUshITmICIa/mYiUNY5T91PfkFiQ1s80QHL3uESYRdhgyotcRsAmAc48kQKNdr5FdFJjGtORuuYAtwT8JgQYOynTdhcwM0gDuo1H4gOIHsoueJ0jug4iAJgpZgpi7G4PdAEBwUi3P6wqUR6pdkDoq0O1riNtKLneoYHwogncNI7qrSdJws9xRnunIlc86HbYPsiah9kjnEozBqhEtJ5pCZB1QR7hKx0HJWMO6yPdVCpHNxq/okFScQqExjkkqMG4OSqLQLtOR/4g+pqAk5HRISQsNJ2ThASkLoQlHcKk1i9MzKHphYPAwAkeLt0s3APNbU052UZwiDgINUu90p1fZKHfPJDUSlBVGjOViY3yEhcUrnzg7JwDq1O/UAFekGtGXzPRcwLeiYEDZpSgrsE8pCfXqGIC4w9x3KvTn5GVO4dBzsw3kgHQQgXiZU3OkohmeZyEAZGSPuVgcFTJ0kYyqiVXACCBPYrYGYjuplwGwCWT1CIFSQ/kFJ4a3ZDPsjjmmSaZZZNJSi1ZZAOErsFZZIwBKYLLIAFBFZAEJowgsgzNEEKjyQ3HsssjTTlZZZIMi/l2WWTCadpxsFlkApSErLIJ//2Q==',
          alt: 'Mock Image Value',
          width: '3000',
          height: '2001',
        },
      },
      headerTitle: {
        value:
          'National Medical Groups Express Growing Concern Over HHS Extended Closure of Arbitration',
      },
      subtitle: {
        value:
          'AICentral.org is the premier online resource for information on FDA-cleared imaging AI tools, helping you find the algorithms that best support your patients and workflows.',
      },
    },
  },
};

export const PageContext = mockSitecoreContext;

//Created Mock context for Storybook
