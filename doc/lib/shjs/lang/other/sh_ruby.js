if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['ruby'] = [
  [
    {
      'regex': /\b(?:require)\b/g,
      'style': 'sh_preproc'
    },
    {
      'next': 1,
      'regex': /#/g,
      'style': 'sh_comment'
    },
    {
      'regex': /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
      'style': 'sh_number'
    },
    {
      'next': 2,
      'regex': /"/g,
      'style': 'sh_string'
    },
    {
      'next': 3,
      'regex': /'/g,
      'style': 'sh_string'
    },
    {
      'next': 4,
      'regex': /</g,
      'style': 'sh_string'
    },
    {
      'regex': /\/[^\n]*\//g,
      'style': 'sh_regexp'
    },
    {
      'regex': /(%r)(\{(?:\\\}|#\{[A-Za-z0-9]+\}|[^}])*\})/g,
      'style': ['sh_symbol', 'sh_regexp']
    },
    {
      'regex': /\b(?:alias|begin|BEGIN|break|case|defined|do|else|elsif|end|END|ensure|for|if|in|include|loop|next|raise|redo|rescue|retry|return|super|then|undef|unless|until|when|while|yield|false|nil|self|true|__FILE__|__LINE__|and|not|or|def|class|module|catch|fail|load|throw)\b/g,
      'style': 'sh_keyword'
    },
    {
      'next': 5,
      'regex': /(?:^\=begin)/g,
      'style': 'sh_comment'
    },
    {
      'regex': /(?:\$[#]?|@@|@)(?:[A-Za-z0-9_]+|'|\"|\/)/g,
      'style': 'sh_type'
    },
    {
      'regex': /[A-Za-z0-9]+(?:\?|!)/g,
      'style': 'sh_normal'
    },
    {
      'regex': /~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,
      'style': 'sh_symbol'
    },
    {
      'regex': /(#)(\{)/g,
      'style': ['sh_symbol', 'sh_cbracket']
    },
    {
      'regex': /\{|\}/g,
      'style': 'sh_cbracket'
    }
  ],
  [
    {
      'exit': true,
      'regex': /$/g
    }
  ],
  [
    {
      'exit': true,
      'regex': /$/g
    },
    {
      'regex': /\\(?:\\|")/g
    },
    {
      'exit': true,
      'regex': /"/g,
      'style': 'sh_string'
    }
  ],
  [
    {
      'exit': true,
      'regex': /$/g
    },
    {
      'regex': /\\(?:\\|')/g
    },
    {
      'exit': true,
      'regex': /'/g,
      'style': 'sh_string'
    }
  ],
  [
    {
      'exit': true,
      'regex': /$/g
    },
    {
      'exit': true,
      'regex': />/g,
      'style': 'sh_string'
    }
  ],
  [
    {
      'exit': true,
      'regex': /^(?:\=end)/g,
      'style': 'sh_comment'
    }
  ]
];
