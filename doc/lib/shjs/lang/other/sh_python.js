if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['python'] = [
  [
    {
      'regex': /\b(?:import|from)\b/g,
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
      'regex': /\b(?:and|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|global|if|in|is|lambda|not|or|pass|print|raise|return|try|while)\b/g,
      'style': 'sh_keyword'
    },
    {
      'next': 2,
      'regex': /\/\*/g,
      'style': 'sh_comment'
    },
    {
      'next': 3,
      'regex': /^(?:[\s]*'{3})/g,
      'style': 'sh_comment'
    },
    {
      'next': 4,
      'regex': /^(?:[\s]*\"{3})/g,
      'style': 'sh_comment'
    },
    {
      'regex': /^(?:[\s]*'(?:[^\\']|\\.)*'[\s]*|[\s]*\"(?:[^\\\"]|\\.)*\"[\s]*)$/g,
      'style': 'sh_comment'
    },
    {
      'next': 5,
      'regex': /"/g,
      'style': 'sh_string'
    },
    {
      'next': 6,
      'regex': /'/g,
      'style': 'sh_string'
    },
    {
      'next': 7,
      'regex': /(?:[\s]*'{3})/g,
      'style': 'sh_string'
    },
    {
      'next': 8,
      'regex': /(?:[\s]*\"{3})/g,
      'style': 'sh_string'
    },
    {
      'regex': /~|!|%|\^|\*|\(|\)|-|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\|/g,
      'style': 'sh_symbol'
    },
    {
      'regex': /\{|\}/g,
      'style': 'sh_symbol'
    },
    {
      'regex': /(?:[A-Za-z]|_)[A-Za-z0-9_]*[ \t]*(?=\()/g,
      'style': 'sh_function'
    },
    {
      'regex': /[A-Za-z_][A-Za-z0-9_]*/g,
      'style': 'sh_variable'
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
      'regex': /\*\//g,
      'style': 'sh_comment'
    },
    {
      'next': 2,
      'regex': /\/\*/g,
      'style': 'sh_comment'
    }
  ],
  [
    {
      'exit': true,
      'regex': /(?:'{3})/g,
      'style': 'sh_comment'
    }
  ],
  [
    {
      'exit': true,
      'regex': /(?:\"{3})/g,
      'style': 'sh_comment'
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
      'regex': /(?:'{3})/g,
      'style': 'sh_string'
    }
  ],
  [
    {
      'exit': true,
      'regex': /(?:\"{3})/g,
      'style': 'sh_string'
    }
  ]
];
