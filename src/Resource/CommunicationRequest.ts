
        import { Annotation } from '../Resource/Annotation';
import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { CommunicationRequest_Payload } from '../Resource/CommunicationRequest_Payload';
import { DateTime } from '../Scalar/DateTime';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Period } from '../Resource/Period';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        

        /**
         * A request to convey information; e.g. the CDS system proposes that an alert be sent to a responsible provider, the CDS system proposes that the public health agency be notified about a reportable condition. 
         */
        export class CommunicationRequest  {

            constructor() {
                
            }

            
                /**
                 * This is a CommunicationRequest resource
                 */
                ResourceType: string = 'CommunicationRequest;'
                

                /**
                 * The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.
                 */
                Id? : Id;
                

                /**
                 * The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.
                 */
                Meta? : Meta;
                

                /**
                 * A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc.
                 */
                ImplicitRules? : Uri;
                

                /**
                 * Extensions for implicitRules
                 */
                _implicitRules? : Element;
                

                /**
                 * The base language in which the resource is written.
                 */
                Language? : Code;
                

                /**
                 * Extensions for language
                 */
                _language? : Element;
                

                /**
                 * A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.
                 */
                Text? : Narrative;
                

                /**
                 * These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.
                 */
                Contained? : Array<ResourceList>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                Extension? : Array<Extension>;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                ModifierExtension? : Array<Extension>;
                

                /**
                 * Business identifiers assigned to this communication request by the performer or other systems which remain constant as the resource is updated and propagates from server to server.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * A plan or proposal that is fulfilled in whole or in part by this request.
                 */
                BasedOn? : Array<Reference>;
                

                /**
                 * Completed or terminated request(s) whose function is taken by this new request.
                 */
                Replaces? : Array<Reference>;
                

                /**
                 * A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition, prescription or similar form.
                 */
                GroupIdentifier? : Identifier;
                

                /**
                 * The status of the proposal or order.
                 */
                Status? : Code;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * Captures the reason for the current state of the CommunicationRequest.
                 */
                StatusReason? : CodeableConcept;
                

                /**
                 * The type of message to be sent such as alert, notification, reminder, instruction, etc.
                 */
                Category? : Array<CodeableConcept>;
                

                /**
                 * Characterizes how quickly the proposed act must be initiated. Includes concepts such as stat, urgent, routine.
                 */
                Priority? : Code;
                

                /**
                 * Extensions for priority
                 */
                _priority? : Element;
                

                /**
                 * If true indicates that the CommunicationRequest is asking for the specified action to *not* occur.
                 */
                DoNotPerform? : Boolean;
                

                /**
                 * Extensions for doNotPerform
                 */
                _doNotPerform? : Element;
                

                /**
                 * A channel that was used for this communication (e.g. email, fax).
                 */
                Medium? : Array<CodeableConcept>;
                

                /**
                 * The patient or group that is the focus of this communication request.
                 */
                Subject? : Reference;
                

                /**
                 * Other resources that pertain to this communication request and to which this communication request should be associated.
                 */
                About? : Array<Reference>;
                

                /**
                 * The encounter or episode of care within which the communication request was created.
                 */
                Context? : Reference;
                

                /**
                 * Text, attachment(s), or resource(s) to be communicated to the recipient.
                 */
                Payload? : Array<CommunicationRequest_Payload>;
                

                /**
                 * The time when this communication is to occur.
                 */
                OccurrenceDateTime? : String;
                

                /**
                 * Extensions for occurrenceDateTime
                 */
                _occurrenceDateTime? : Element;
                

                /**
                 * The time when this communication is to occur.
                 */
                OccurrencePeriod? : Period;
                

                /**
                 * For draft requests, indicates the date of initial creation.  For requests with other statuses, indicates the date of activation.
                 */
                AuthoredOn? : DateTime;
                

                /**
                 * Extensions for authoredOn
                 */
                _authoredOn? : Element;
                

                /**
                 * The device, individual, or organization who initiated the request and has responsibility for its activation.
                 */
                Requester? : Reference;
                

                /**
                 * The entity (e.g. person, organization, clinical information system, device, group, or care team) which is the intended target of the communication.
                 */
                Recipient? : Array<Reference>;
                

                /**
                 * The entity (e.g. person, organization, clinical information system, or device) which is to be the source of the communication.
                 */
                Sender? : Reference;
                

                /**
                 * Describes why the request is being made in coded or textual form.
                 */
                ReasonCode? : Array<CodeableConcept>;
                

                /**
                 * Indicates another resource whose existence justifies this request.
                 */
                ReasonReference? : Array<Reference>;
                

                /**
                 * Comments made about the request by the requester, sender, recipient, subject or other participants.
                 */
                Note? : Array<Annotation>;
                
        }
        