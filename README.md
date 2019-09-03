# checkboxFilter

A simple Function for filtering elements with checkboxes

## Examples

```
checkboxFilter(elements, main, sub);

// Code

<div class="filter">
  <h1>Operation System</h1>
  <div class="checkbox">
    <label>
      <input type="checkbox" rel="apple" class="operationsystem" onchange="checkboxFilter('.result > div','.filter input.operationsystem:checked','.filter input.version:checked')" />Apple
    </label>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox" rel="windows" class="operationsystem" onchange="checkboxFilter('.result > div','.filter input.operationsystem:checked','.filter input.version:checked')" />Windows
    </label>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox" rel="linux" class="operationsystem" onchange="checkboxFilter('.result > div','.filter input.operationsystem:checked','.filter input.version:checked')" />Linux
    </label>
  </div>
  <h1>Version</h1>
  <div class="checkbox">
    <label>
      <input type="checkbox" rel="macos1014" class="version" onchange="checkboxFilter('.result > div','.filter input.operationsystem:checked','.filter input.version:checked')" />MacOS 10.14
    </label>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox" rel="macos1013" class="version" onchange="checkboxFilter('.result > div','.filter input.operationsystem:checked','.filter input.version:checked')" />MacOS 10.13
    </label>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox" rel="w10" class="version" onchange="checkboxFilter('.result > div','.filter input.operationsystem:checked','.filter input.version:checked')" />Windows 10
    </label>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox" rel="ubuntu" class="version" onchange="checkboxFilter('.result > div','.filter input.operationsystem:checked','.filter input.version:checked')" />Ubuntu
    </label>
  </div>
</div>
<div class="result">
  <div class="apple macos1014">
    <h1>Apple MacBook Pro Retina 15</h1>
  </div>
  <div class="apple macos1013">
    <h1>Apple MacBook Pro Retina 13</h1>
  </div>
  <div class="windows w10">
    <h1>Lenovo Yoga X1 Carbon</h1>
  </div>
  <div class="linux ubuntu">
    <h1>Lenovo ThinkPad</h1>
  </div>
</div>
```