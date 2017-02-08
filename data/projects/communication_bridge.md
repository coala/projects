Sometimes a project integrates data from outside of the repository, so
commit-based-CI alone isn't effective. New data could cause an error, which
isn't noticed until the next code change is proposed, and the build breaks.
Often a project will decide the build shouldn't break when the data is incorrect
during regular development, and these validations are only enabled during betas
and release candidates.

To keep notifications about this errors occurring, regular builds with these
checks enabled are necessary. These problems in imported data need to be
distributed to the appropriate team somehow.

A special CI build that fails is one option of notifying the team, but that
isn't very informative, especially for teams that are not developers - they wont
appreciate hunting down errors in CI logs. Ideally a steady stream of new
problems are periodically posted to a online team room, such as IRC, Telegram,
slack or gitter.

One example is translations stored in a web service like Pootle. Translations
in Pootle are not committed automatically. Also translations can become broken
by development, so constant monitoring is needed. Translation teams typically
hang out on a team chat service.

The critical functionality is ensuring that the bot does not regularly repeat
the same problem, unless configured to do so. It may take a while to find
someone who knows how to fix the problem, or the number of problems may be too
large to be regularly listed in the chat room.

#### Milestones

##### PREPARATION/BONDING

* The participant has merged an enhancement to cobot.

##### CODING PHASE 1

* A system exists that posts notices into a chat room for every new error that
occurs, without duplicating notices.

##### CODING PHASE 2


##### CODING PHASE 3

* A system exists that engages contributors to pick up errors to be fixed.
