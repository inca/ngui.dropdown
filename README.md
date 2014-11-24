# Dropdown for Angular

Simple directive for toggleable dropdown. Just add some CSS.

```
<div class='dropdown' ui-dropdown>
  <a href=''
     ng-click='dropdown.toggle($event)'
     ng-class='{ active: dropdown.active }'>
    <i class='fa-bars'></i>
  </a>
  <div class='dropdown-menu' ng-show='dropdown.active'>...</div>
</div>
```

# License

MIT License © Boris Okunskiy 2014
