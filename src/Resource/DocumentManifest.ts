
        import { Code } from '../Scalar/Code';
import { CodeableConcept } from '../Resource/CodeableConcept';
import { DateTime } from '../Scalar/DateTime';
import { DocumentManifest_Agent } from '../Resource/DocumentManifest_Agent';
import { DocumentManifest_Related } from '../Resource/DocumentManifest_Related';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { Id } from '../Scalar/Id';
import { Identifier } from '../Resource/Identifier';
import { Meta } from '../Resource/Meta';
import { Narrative } from '../Resource/Narrative';
import { Reference } from '../Resource/Reference';
import { ResourceList } from '../Union/ResourceList';
import { Uri } from '../Scalar/Uri';

        export enum DocumentManifestStatusKind {
                current,
superseded,
enteredInError
            }

        /**
         * A collection of documents compiled for a purpose together with metadata that applies to the collection. 
         */
        export class DocumentManifest  {

            constructor() {
                this.Content = new Array<Reference>();
            }

            
                /**
                 * This is a DocumentManifest resource
                 */
                ResourceType: string = 'DocumentManifest;'
                

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
                 * A single identifier that uniquely identifies this manifest. Principally used to refer to the manifest in non-FHIR contexts.
                 */
                MasterIdentifier? : Identifier;
                

                /**
                 * Other identifiers associated with the document manifest, including version independent  identifiers.
                 */
                Identifier? : Array<Identifier>;
                

                /**
                 * The status of this document manifest.
                 */
                Status? : DocumentManifestStatusKind;
                

                /**
                 * Extensions for status
                 */
                _status? : Element;
                

                /**
                 * The code specifying the type of clinical activity that resulted in placing the associated content into the DocumentManifest.
                 */
                Type? : CodeableConcept;
                

                /**
                 * Who or what the set of documents is about. The documents can be about a person, (patient or healthcare practitioner), a device (i.e. machine) or even a group of subjects (such as a document about a herd of farm animals, or a set of patients that share a common exposure). If the documents cross more than one subject, then more than one subject is allowed here (unusual use case).
                 */
                Subject? : Reference;
                

                /**
                 * When the document manifest was created for submission to the server (not necessarily the same thing as the actual resource last modified time, since it may be modified, replicated, etc.).
                 */
                Created? : DateTime;
                

                /**
                 * Extensions for created
                 */
                _created? : Element;
                

                /**
                 * An actor taking an active role in the manifest.
                 */
                Agent? : Array<DocumentManifest_Agent>;
                

                /**
                 * A patient, practitioner, or organization for which this set of documents is intended.
                 */
                Recipient? : Array<Reference>;
                

                /**
                 * Identifies the source system, application, or software that produced the document manifest.
                 */
                Source? : Uri;
                

                /**
                 * Extensions for source
                 */
                _source? : Element;
                

                /**
                 * Human-readable description of the source document. This is sometimes known as the "title".
                 */
                Description? : String;
                

                /**
                 * Extensions for description
                 */
                _description? : Element;
                

                /**
                 * The list of Resources that consist of the parts of this manifest.
                 */
                Content : Array<Reference>;
                

                /**
                 * Related identifiers or resources associated with the DocumentManifest.
                 */
                Related? : Array<DocumentManifest_Related>;
                
        }
        