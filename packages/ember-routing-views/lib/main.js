/**
@module ember
@submodule ember-routing-views
*/

import Ember from "ember-metal/core";
import isEnabled from "ember-metal/features";
import LinkComponent, { DeprecatedLinkView } from "ember-routing-views/views/link";
import {
  OutletView,
  CoreOutletView
} from "ember-routing-views/views/outlet";

Ember.LinkView = DeprecatedLinkView;
Ember.LinkComponent = LinkComponent;
Ember.OutletView = OutletView;
if (isEnabled('ember-routing-core-outlet')) {
  Ember.CoreOutletView = CoreOutletView;
}

export default Ember;
