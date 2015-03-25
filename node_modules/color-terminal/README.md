# Color Terminal

`color-terminal` is a small package that can be used with [node.js](http://nodejs.org) to control terminal output. The package can move the cursor in the terminal and output colored text. It can colorize a message with a simple straightforward markup syntax.

# Installation and use

Install with [npm](http://npmjs.org) to current directory:

```bash
  npm -d install color-terminal .
```

Or install globally:

```bash
  npm -d -g install color-terminal
```

Then `require()` package from your script:

```coffeescript
  terminal = require('color-terminal')
```

# Examples

Some examples from the `examples` directory. 

# Features

## Colors

Control colored output. See also `examples/colors.js`. Colors may vary depending on the terminal settings.

Simple color changing:

```coffeescript   
  terminal.color('magenta').write('Unicorn');
```

This will output `Unicorn` in magenta (or purple). To change the background color to magenta:

```coffeescript
  terminal.color('magenta', 'background').write('Unicorn');
```

### Color formatting

`color-terminal` supports formatting strings with colors using a simple syntax. Outputting `Unicorn` in magenta (like the example above) would look like this:

```coffeescript
  terminal.colorize('%mUnicorn');
  
  # And changing the background color to magenta
  terminal.colorize('%5Unicorn');
```

Using this syntax we can create `Rainbows` easily in one line:

```coffeescript
  terminal.colorize('%rR%ma%ci%bn%yb%go%rw%n\n');
  
  # Or with background colors
  terminal.colorize('%w%1  R  %2  A  %3  I  %4  N  %5  B  %6  O  %7  W  %n ');
```

The colorize function accepts the following modifiers:

                      text      text            background
          ------------------------------------------------
          %k %K %0    black     dark grey       black
          %r %R %1    red       bold red        red
          %g %G %2    green     bold green      green
          %y %Y %3    yellow    bold yellow     yellow
          %b %B %4    blue      bold blue       blue
          %m %M %5    magenta   bold magenta    magenta
          %p %P       magenta (think: purple)
          %c %C %6    cyan      bold cyan       cyan
          %w %W %7    white     bold white      white
    
          %F     Blinking, Flashing
          %U     Underline
          %8     Reverse
          %_,%9  Bold
    
          %n,%N  Resets the color
          %%     A single %
          
Multiple effects also can be set by providing `Object` as parameter to `color()` method:

```coffeescript
  terminal.color({"attribute": "bold", "foreground": "yellow"}).write('Yellow bold text')
```

Colored ouput can be reset with the `reset()` function:

```coffeescript
  terminal.color('red').write('This is red,').reset().write(' and this is not')
```

### Notice about color modifiers and `colorize()`

Remember, that multiple modifiers does not requires to reset formatting before EOL.
Example:

```coffeescript
  # 'Rainbow', thin colors.
  terminal.colorize('%rR%ma%ci%bn%yb%go%rw%n\n') # => 'Rainbow' in different colors
  
  # 'Rainbow', thin colors, bold modifier.
  terminal.colorize('$_%rR%ma%ci%bn%yb%go%rw%n\n') # => Bold 'Rainbow' in different colors
  
  # 'Rainbow', bold colors.
  terminal.colorize('%RR%Ma%Ci%Bn%Yb%Go%Rw%n\n') # => The same.
```

So, as you see, you don't need to output reset modifiers every time you colored text.
Better practice will be use of `reset()` method called next to `colorize()`:

```coffeescript
  # Best practice
  terminal.colorize('%RR%Ma%Ci%Bn%Yb%Go%Rw').reset()
```

### String\#color()

You can use color formatting with `String` `color()` method. Example:

```coffeescript
  # String#color() accepts three parameters: foreground(text) color, background color and style attribute.
  "string".color('white', 'red', 'blink') # => Blinking white string 'string' with red background
  
  # If you need just to set foreground color and style and not the background, pass null or empty string to param:
  "another string".color('blue', null, 'bold') # => Is equivalent to:
  "another string".color('blue', '', 'bold')
```

### Cursor control

`color-terminal` provides methods for terminal cursor positioning. It can be usable in situations when you need strict text formatting. Example:

```coffeescript
  # 'move()' function uses left top corner as (0,0) origin, so (5,7) coords means that resulting point
  # will be placed 5 symbols from the top corner and 7 symbols from the left corner.
  #
  # To reset terminal, you can use 'reset()' and 'clear()' methods.
  terminal.move(5, 7).color('red').write('*').reset().clear() 
```

`color-terminal` also contains shorthand methods for cursor positioning that help to avoid geometric mess with 'move()' method:

```coffeescript
  # Places cursor 10 symbols up from the bottom corner.
  terminal.up(10).write('yay!')
  
  # Places cursor 2 symbols down from the current position.
  terminal.down(2).write('down')
  
  # Places cursor 4 symbols right from the current position.
  terminal.right(2).write('padding')
  
  # Places cursor 6 symbols left from the current position.
  terminal.left(6).write('left-left')
```

### 'Cleaners'

Useful methods to clear contents from terminal.

```coffeescript
  # Clear all characters from the terminal
  terminal.clear()
  
  # Clear the line the cursor is at
  terminal.clearLine()
  
  # Clear the next `n` characters from the current cursor position. In current example method will clear six characters.
  terminal.clearCharacters(6) # => equals terminal.write(new Array(6 + 2).join(' ')).left(6 + 2)
```

### Other methods

```coffeescript
  # Write the `n` new lines.
  terminal.nl(2)  # => "\n\n"
  
  # Write the `n` tabulation characters.
  terminal.tab(4) # => "\t\t\t\t"
```

# Credits

Original package by Mattijs Hoitink.

* [mattijs@GitHub](https://github.com/mattijs) — GitHub profile.
* [mattijs/node-terminal](https://github.com/mattijs/node-terminal) — original package.
* [monkeyandmachine](http://monkeyandmachine.com) — author's blog.

This fork of the package maintained and developed by [Forgotten Labors Initiative](https://forgotten-labors.github.com).

# License

`color-terminal` is licensed under the [MIT License](http://opensource.org/licenses/mit-license.php).

